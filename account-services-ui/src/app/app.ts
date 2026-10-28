
import { Component, signal, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
}

interface Account {
  accountId: number;
  accountName: string;
  accountNumber: string;
  availableBalance: number;
  currency: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private readonly http = inject(HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);

  // Account information from .NET API
  protected account: Account | null = null;
  protected transactions: Transaction[] = [];
  protected apiError = '';
  protected loading = true;

  // Service request form
  protected readonly serviceType = signal('');
  protected readonly details = signal('');
  protected readonly attempted = signal(false);
  protected readonly submitted = signal(false);

  protected readonly requests =
    signal<{ type: string; details: string }[]>([]);

  
ngOnInit(): void {
  this.http.get<Account>('http://localhost:5000/api/accounts')
    .subscribe({
      next: data => {
        this.account = data;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.apiError = 'Unable to load account information.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });

  this.http.get<Transaction[]>('http://localhost:5000/api/transactions')
    .subscribe({
      next: data => {
        this.transactions = data;
        this.cdr.markForCheck();
      },
      error: () => {
        this.apiError = 'Unable to load transactions.';
        this.cdr.markForCheck();
      }
    });
}


  protected submitRequest(): void {
    this.attempted.set(true);

    if (!this.serviceType() || !this.details().trim()) {
      this.submitted.set(false);
      return;
    }

    this.requests.update(items => [
      ...items,
      {
        type: this.serviceType(),
        details: this.details().trim()
      }
    ]);

    this.submitted.set(true);
    this.attempted.set(false);
    this.serviceType.set('');
    this.details.set('');
  }
}

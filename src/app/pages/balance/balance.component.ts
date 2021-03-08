import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../../service/balance.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  quantity: number = 0;
  constructor(
    private balanceService: BalanceService,
    private tokenService: TokenService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
  }

}




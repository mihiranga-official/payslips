import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payslips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payslips.component.html',
  styleUrl: './payslips.component.scss'
})
export class PayslipsComponent {

  //Employee Details and Company Details
  companyName: string = 'D.R Exports (Pvt) Ltd '
  department: string = 'Knock Down 1';
  months: string = 'September 2024';
  employeename: string = "Harsha Kumara Chamika M.";
  employeeNo: number = 481;
  slipsNo: number = 1;

  //Starting Ernings sections
  basicSalary: number = 27750.000;
  targetIncetive: number = 13320.00
  attendAllowance: number = 1000.00

  bra2005: number = 1000.00;
  bra2016: number = 1000.00;
  interimAllowance2023: number = 2500.00;
  productivityincentive: number = 0.00;

  exprServiceL: number = 8450.00;
  specialAllowance: number = 10911.00
  holidayPay: number = 2500.00

  grossTotalForEPF:number=69931.00
otHours:number=9
otAmount:number=2109.41
coinBF:number=-4.66


  //starting Deduction Section
  noPayAmount: number = 0.00
  ///
  nopayHours:number=0.00
  noPayAmountForHours:number=1206.52

  lateHoursAmount:number=0.00
  lateHours: number = 0;
  lateHoursAmountForHours:number=150.82


  epfEight: number = 5594.50
  salaryAdvanced: number = 5000.00
  festivalAdvanced: number = 0.00
  specialLoans: number = 3245.04
  totalDeduction: number = 13866.00
  netSalary:number=58170.00
  payeeTax: number = 0.00;
  sRL:number=0.00
  stampDuty:number=25.00;
  specialDeduction: number = 0.00
  coinCf:number=1.49



  ePFEmployerContribution:number=8391.75
  etfEmployerContribution:number=2097.94
  extraOT:number=0.00
  totalCompanyContribution:number=10489.69
  totalAddition:number=72036.03
  totalForTax:number=72036.03
  tIAmountForEPFETF:number=69931.28
}

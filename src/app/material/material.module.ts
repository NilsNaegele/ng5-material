import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatCheckboxModule,
         MatMenuModule,
         MatInputModule,
         MatSnackBarModule,
         MatToolbarModule,
         MatDialogModule,
         MatSidenavModule,
         MatNativeDateModule,
         MatCardModule,
         MatTabsModule,
         MatIconModule } from '@angular/material';

@NgModule({
  imports: [ MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class MaterialModule { }
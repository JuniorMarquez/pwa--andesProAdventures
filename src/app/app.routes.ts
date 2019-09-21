import {RouterModule,Routes} from '@angular/router';
import {
	SliderHomeComponent,
	MyTixsComponent,
	LoginComponent,
	PartnersComponent,
	PartnerDetailComponent,
	TixDetailComponent,
	SignupComponent,
	ComingComponent,
	AlltixsComponent,
	PartnerComponent,
	NewMemberComponent,
	ProfileComponent,
	HomeComponent,
	BookingComponent,
	TreksComponent,
	AboutComponent,
	ContactComponent,
	BlogComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:HomeComponent},
	{path:'alltixs',component:AlltixsComponent},
	{path:'mytixs',component:MyTixsComponent, canActivate:[AuthGuard]},
	{path:'login',component:LoginComponent},	
	{path:'partners',component:PartnersComponent,canActivate:[AuthGuard]},
	{path:'partner-detail/:id',component:PartnerDetailComponent, canActivate:[AuthGuard]},
	{path:'tix-detail/:id',component:TixDetailComponent},
	{path:'signup',component:SignupComponent},
	{path:'coming',component:ComingComponent},
	{path:'new-member',component:NewMemberComponent, canActivate:[AuthGuard]},
	{path:'new-member/partner',component:PartnerComponent, canActivate:[AuthGuard]},
	{path:'profile',component:ProfileComponent, canActivate:[AuthGuard]},
	{path:'booking',component:BookingComponent, canActivate:[AuthGuard]},	
	{path:'about',component:AboutComponent},
	{path:'treks',component:TreksComponent},
	{path:'blog',component:BlogComponent},
	{path:'contact',component:ContactComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);


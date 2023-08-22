import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichierProduitAdminComponent } from './admin/affichier-produit-admin/affichier-produit-admin.component';
import { AffichierClientAdminComponent } from './admin/affichierClientAdmin/affichier-client-admin/affichier-client-admin.component';
import { AffichierCommandeAdminComponent } from './admin/affichierCommandeAdmin/affichier-commande-admin/affichier-commande-admin.component';
import { EditerClientAdminComponent } from './admin/editerClientAdmin/editer-client-admin/editer-client-admin.component';
import { EditerProduitComponent } from './admin/editerProduit/editer-produit/editer-produit.component';
import { LoginAdminComponent } from './admin/loginAdmin/login-admin/login-admin.component';
import { AffichierProduitComponent } from './affichierProduit/affichier-produit/affichier-produit.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { AjouterClientComponent } from './ajouterClient/ajouter-client/ajouter-client.component';
import { AjouterProduitComponent } from './ajouter_produit/ajouter-produit/ajouter-produit.component';
import { CommandeComponent } from './commande/commande/commande.component';
import { ConnecterComponent } from './connecter/connecter/connecter.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header/header.component';
import { ObliermotpasseComponent } from './obliermotpasse/obliermotpasse.component';
import { AffichierAdminComponent } from './affichier-admin/affichier-admin.component';

const routes: Routes = [{path:'ajouterProduit',component:AjouterProduitComponent},
{path:'ajouterClient/:idP',component:AjouterClientComponent},
{path:'header',component:HeaderComponent},
{path:'affichierProduit',component:AffichierProduitComponent},
{path:'affichierProduitAdmin',component:AffichierProduitAdminComponent},
{path:'editer/:id',component:EditerProduitComponent},
{path:'affichierClientAdmin',component:AffichierClientAdminComponent},
{path:'editerClient/:id',component:EditerClientAdminComponent},
{path:'connecter/:id',component:ConnecterComponent},
{path:'commande/:idP/:idC',component:CommandeComponent},
{path:'affichierCommandeAdmin',component:AffichierCommandeAdminComponent},
{path:'loginAdmin',component:LoginAdminComponent},
{path :'', redirectTo : 'affichierProduit', pathMatch:'full'},
{path:'contact',component:ContactComponent},
{path:'obliermotpasse/:idP',component:ObliermotpasseComponent},
{path:'ajouterAdmin',component:AjouterAdminComponent},
{path:'affichierAdmin',component:AffichierAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* DONNÉES DE DÉMONSTRATION : modifiez ici les prix, réservoirs, commandes, etc. */
const SEED={prix:150,max:5000,
res:[{n:'Bassin Thiaroye Nord',cap:20000,niv:15200,lat:14.7650,lng:-17.3600,ph:7.1,tb:3},{n:'Réservoir Pikine Ouest',cap:12000,niv:4100,lat:14.7530,lng:-17.3950,ph:7.3,tb:5},{n:'Bassin Médina Gounass',cap:15000,niv:11800,lat:14.7600,lng:-17.4150,ph:7.0,tb:2},{n:'Réservoir Diamaguène',cap:8000,niv:900,lat:14.7380,lng:-17.3800,ph:7.4,tb:8}],
sig:[{id:'S-1041',t:'Eau stagnante',l:'Rue 12, Thiaroye',st:'Reçu'},{id:'S-1040',t:'Caniveau bloqué',l:'Marché Zinc',st:'En cours'},{id:'S-1038',t:'Déchets dans un bassin',l:'Bassin Médina Gounass',st:'Résolu'},{id:'S-1035',t:'Fuite',l:'Diamaguène',st:'En cours'}],
cmd:[{id:'C-2201',n:'Ibrahima Diouf',r:0,l:1500,pay:'Wave',st:'Payée'},{id:'C-2200',n:'Fatou Sarr',r:2,l:800,pay:'Orange Money',st:'Prête à retirer'},{id:'C-2198',n:'Moussa Ndiaye',r:0,l:3000,pay:'Wave',st:'Retirée'},{id:'C-2197',n:'Aïssatou Ba',r:2,l:600,pay:'Wave',st:'Retirée'},{id:'C-2195',n:'Cheikh Fall',r:1,l:2000,pay:'Orange Money',st:'Retirée'},{id:'C-2194',n:'Ibrahima Diouf',r:0,l:1000,pay:'Wave',st:'En attente'}],
jr:[{t:'2026-11-16 08:02',w:'Chiara',a:'Connexion'},{t:'2026-11-15 17:40',w:'Jacques',a:'Remboursement, commande C-2194'},{t:'2026-11-14 10:12',w:'Chiara',a:'Prix fixé à 150 FCFA les 100 litres'}],
us:[{n:'Ibrahima Diouf',r:'Maraîcher',s:'Actif'},{n:'Fatou Sarr',r:'Maraîchère',s:'Actif'},{n:'Cheikh Fall',r:'Maraîcher',s:'En attente'},{n:'Agent Seck',r:'Mairie',s:'Actif'}]};
const MDP={mairie:'mairie2026',admin:'rainroot2026'};

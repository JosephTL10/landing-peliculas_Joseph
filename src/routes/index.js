import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index',{title:'Pelicula'}));


router.get('/sonic3', (req, res) => res.render('sonic3',{title:'Sonic 3'}));

router.get('/spiderman', (req, res) => res.render('spiderman',{title:'Spiderman'}));

router.get('/fnaf', (req, res) => res.render('fnaf',{title:'Five Night At Freedy'}));

router.get('/mariobros', (req, res) => res.render('mariobros',{title:'Mario Bros'}));



export default router; // exporta el router para ser utilizado en otros archivos
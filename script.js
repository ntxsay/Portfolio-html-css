const app = document.querySelector('#landing .landing__description');

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 5,
});

typewriter
    .typeString('Formé en développement web, j’ai acquis des compétences en front-end et back-end, tout en approfondissant ma passion pour le C#.')
    .start();

/*
new Scene({
    "#imgAppCsharp": Scene.flipY({ x: 2 }).setDuration(5),
    "#imgAppCsharp2": Scene.flipY({ x: 2, backside: true }).setDuration(5)
}, {
    selector: true,
    iterationCount: "infinite",
}).play();*/

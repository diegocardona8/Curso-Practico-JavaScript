const adversario = "Hulk";

const LOKI_DISFRASES= {

    "Iron-Man": "Magneto",
     Thor: "Odin",
     Hulk: "Thanos"

};

const LokiDefaultDisfraz = "Loki";

const loki = LOKI_DISFRASES[adversario] || LokiDefaultDisfraz;

console.log(loki);
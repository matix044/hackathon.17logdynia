import { $html, $file, App } from "./deps.ts";

const app = new App({ port: 7788 });

// STATIC
app.listen("GET", "/:dir/:file", (_req, params) => {
    console.log(`GET :: ./public/${params.dir}/${params.file}`);

    if (params.file.endsWith(".svg")) return new Response(Deno.readFileSync(`./public/${params.dir}/${params.file}`), {
        headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
        status: 200
    });
    else if (params.file.endsWith(".js")) return new Response(Deno.readFileSync(`./public/${params.dir}/${params.file}`), {
        headers: { "Content-Type": "text/javascript; charset=utf-8" },
        status: 200
    });
    else return $file(`./public/${params.dir}/${params.file}`);
});

app.listen("GET", "/", () => {
    console.log("GET :: ./public/templates/index.html");
    return $html("./public/templates/index.html");
});

app.listen("GET", "/planeta", () => {
    console.log("GET :: ./public/templates/planeta.html");
    return $html("./public/templates/planeta.html");
});

app.listen("GET", "/wybory", () => {
    console.log("GET :: ./public/templates/wybory.html");
    return $html("./public/templates/wybory.html");
});

console.log("Server is now running!");
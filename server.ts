import { $html, $file, App } from "./deps.ts";

const app = new App({ port: 7788 });

// STATIC
app.listen("GET", "/:dir/:dirr/:file", (_req, params) => {
    console.log(`GET :: ./public/${params.dir}/${params.dirr}/${params.file}`);
    return $file(`./public/${params.dir}/${params.dirr}/${params.file}`);
});

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
    else if (params.file.endsWith(".css")) return new Response(Deno.readFileSync(`./public/${params.dir}/${params.file}`), {
        headers: { "Content-Type": "text/css; charset=utf-8" },
        status: 200
    });
    else return $file(`./public/${params.dir}/${params.file}`);
});

app.listen("GET", "/", () => {
    console.log("GET :: ./public/templates/index.html");
    return $html("./public/templates/index.html");
});

app.listen("GET", "/planet", () => {
    console.log("GET :: ./public/templates/planet.html");
    return $html("./public/templates/planet.html");
});

app.listen("GET", "/wybory", () => {
    console.log("GET :: ./public/templates/choices.html");
    return $html("./public/templates/choices.html");
});

console.log("Server is now running!");
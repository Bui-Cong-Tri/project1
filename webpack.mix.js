import mix from "laravel-mix";

mix.setPublicPath("public")
    .js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);

mix.combine(["node_modules/jquery/dist/jquery.js"], "public/js/outputFile.js");

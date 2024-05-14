self.addEventListener("install", (event) => {
    event.waitUntil(
        cache.open("static").then((cache) => {
            return cache.addAll([
                "./form_lab.html",
                "./formStyle.css",
                "./forms.js",
                "./index.js",
                "./service_worker.js",
                "./manifest.json",
                "./cloudy192.png",
                "./cloudy512.png",
                "./duo.png"
            ]);
        })
    );
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        catches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
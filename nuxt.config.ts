// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=500, initial-scale=1",
			title: "My App",
			meta: [
				// <meta name="description" content="My amazing site">
				{ name: "description", content: "My amazing site." }
			]
		}
	}
});

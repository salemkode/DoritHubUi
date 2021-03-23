import App from './App.svelte';
import "src/scss/main.scss";
const app = new App({
	target: document.body,
	props: {
		name: 'world',
		hydrate: true
	}
});

export default app;
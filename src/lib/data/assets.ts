import type { Asset } from '$lib/types';
import { theme } from '$lib/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

	const Assets = {
	AdonisJs: a('adonis.png'),
	AfterEffects: a('after-effects.svg'),
	Android: a('android.png'),
	Angular: a('angular.png'),
	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Celery: a('celery.svg'),
	ClemsonAcademic: a('clemson-academic.png'),
	ClemsonCECAS: a('clemson-cecas.png'),
	ClemsonGeneral: a('clemson-general.png'),
	Cpp: a('cpp.svg'),
	Csharp: a('csharp.svg'),
	CSS: a('css.svg'),
	Cuda: a('cuda.png'),
	Dart: a('dart.png'),
	Deno: a('deno.png', 'deno-dark.png'),
	Django: a('django.svg'),
	Docker: a('docker.svg'),
	Electron: a('electron.png'),
	ExpressJs: a('express.png'),
	FastApi: a('fastapi'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	Firebase: a('firebase.png'),
	Flask: a('flask.svg'),
	Flutter: a('flutter.svg'),
	Github: a('github-mark.svg', 'github-mark-white.svg'),
	Go: a('go.svg'),
	HTML: a('html.svg'),
	Illustrator: a('illustrator.svg'),
	Java: a('java.png'),
	JavaScript: a('js.png'),
	Jest: a('jest.png'),
	Kafka: a('kafka.svg'),
	Kotlin: a('kotlin.png'),
	Kubernetes: a('kubernetees.svg'),
	MongoDB: a('mongodb.svg'),
	MSSQL: a('mssqlserver.svg'),
	MySQL: a('mysql.png'),
	Neo4j: a('neo4j.svg'),
	NestJs: a('nest.svg'),
	Nginx: a('nginx.svg'),
	NodeJs: a('node.png'),
	Numpy: a('numpy.svg'),
	Nuxt: a('nuxt.png'),
	OpenCV: a('OpenCV.svg'),
	Pandas: a('pandas.svg'),
	Photoshop: a('photoshop.svg'),
	Postcss: a('postcss.svg'),
	PostgreSQL: a('postgres.png'),
	PowerBI: ('PowerBI.png'),
	Premiere: a('premiere.svg'),
	Python: a('python.png'),
	Quasar: a('quasar.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	ReactJs: a('react.svg'),
	Redis: a('redis.svg'),
	RLang: a('rlang.svg'),
	ROS: a('roslogo.svg', 'ros_color.svg'),
	Rust: a('ferris.png'),
	Ruvy: a('ruvy.svg'),
	Sass: a('sass.png'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	SolidJs: a('solid.svg'),
	Svelte: a('svelte.png'),
	Tailwind: a('tailwind.svg'),
	Teams: a('microsoft-teams-logo.svg'),
	TypeScript: a('ts.png'),
	Unknown: a('no-img.svg'),
	Unocss: a('unocss.svg'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	VueJs: a('vue.png'),
	Xamarin: a('xamarin.svg'),
	WKHS: a('wkhs.jpg')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};

import { EventData, FilterList, IStreamEvent, ITranscript, Note, Notification } from '@types'
const Filters: FilterList = [
	'Today',
	'Tomorrow',
	'This week',
	'This month',
	'Next week',
	'Next month',
]

export default Filters

export const EventsData: EventData[] = [
	{
		id: '1',
		title: 'The Beleivers Tabernacle',
		subTitle: 'Praise Worship Friday',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
    Fusce volutpat turpis nec fermentum condimentum. Pellentesque enim sem, ullamcorper a arcu nec, laoreet tempus orci. Fusce in arcu nec ligula lacinia tempus vitae vitae metus. Aliquam viverra vel felis eget interdum. Fusce vestibulum felis at dolor congue pharetra. Etiam iaculis vitae turpis vitae cursus. Aenean id dignissim urna, non rutrum nunc.
Integer nec lectus et ante consectetur consequat. Donec congue odio lacus. Integer ultrices sem vitae volutpat congue. In hac habitasse platea dictumst. In et sapien sem. Cras quis justo leo. Mauris sit amet mauris velit. Vivamus varius justo lectus, ut venenatis diam porta ut. Donec hendrerit arcu nisl, ut auctor diam vulputate vitae. Nulla facilisis leo facilisis, accumsan orci sed, lobortis purus. Aenean felis tortor, lacinia at porta quis, dapibus vel dui. Nullam sed nibh porta, tincidunt felis ac, condimentum erat. Vestibulum venenatis auctor aliquet.`,
		date: new Date(),
		venue: 'Badagry',
		view: 100,
		likes: 200,
		comments: 18,
		interests: 10,
		image: require('@assets/img/svgs/dummyA.png'),
	},
	{
		id: '2',
		title: 'The Beleivers Tabernacle',
		subTitle: 'Praise Worship Friday',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
    Fusce volutpat turpis nec fermentum condimentum. Pellentesque enim sem, ullamcorper a arcu nec, laoreet tempus orci. Fusce in arcu nec ligula lacinia tempus vitae vitae metus. Aliquam viverra vel felis eget interdum. Fusce vestibulum felis at dolor congue pharetra. Etiam iaculis vitae turpis vitae cursus. Aenean id dignissim urna, non rutrum nunc.
Integer nec lectus et ante consectetur consequat. Donec congue odio lacus. Integer ultrices sem vitae volutpat congue. In hac habitasse platea dictumst. In et sapien sem. Cras quis justo leo. Mauris sit amet mauris velit. Vivamus varius justo lectus, ut venenatis diam porta ut. Donec hendrerit arcu nisl, ut auctor diam vulputate vitae. Nulla facilisis leo facilisis, accumsan orci sed, lobortis purus. Aenean felis tortor, lacinia at porta quis, dapibus vel dui. Nullam sed nibh porta, tincidunt felis ac, condimentum erat. Vestibulum venenatis auctor aliquet.`,
		date: new Date(),
		venue: 'Badagry',
		view: 100,
		likes: 200,
		comments: 18,
		interests: 10,
		image: require('@assets/img/svgs/dummyD.png'),
	},
	{
		id: '3',
		title: 'The Beleivers Tabernacle',
		subTitle: 'Praise Worship Friday',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
    Fusce volutpat turpis nec fermentum condimentum. Pellentesque enim sem, ullamcorper a arcu nec, laoreet tempus orci. Fusce in arcu nec ligula lacinia tempus vitae vitae metus. Aliquam viverra vel felis eget interdum. Fusce vestibulum felis at dolor congue pharetra. Etiam iaculis vitae turpis vitae cursus. Aenean id dignissim urna, non rutrum nunc.
Integer nec lectus et ante consectetur consequat. Donec congue odio lacus. Integer ultrices sem vitae volutpat congue. In hac habitasse platea dictumst. In et sapien sem. Cras quis justo leo. Mauris sit amet mauris velit. Vivamus varius justo lectus, ut venenatis diam porta ut. Donec hendrerit arcu nisl, ut auctor diam vulputate vitae. Nulla facilisis leo facilisis, accumsan orci sed, lobortis purus. Aenean felis tortor, lacinia at porta quis, dapibus vel dui. Nullam sed nibh porta, tincidunt felis ac, condimentum erat. Vestibulum venenatis auctor aliquet.`,
		date: new Date(),
		venue: 'Badagry',
		view: 100,
		likes: 200,
		comments: 18,
		interests: 10,
		image: require('@assets/img/svgs/dummyC.png'),
	},
	{
		id: '4',
		title: 'The Beleivers Tabernacle',
		subTitle: 'Praise Worship Friday',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
    Fusce volutpat turpis nec fermentum condimentum. Pellentesque enim sem, ullamcorper a arcu nec, laoreet tempus orci. Fusce in arcu nec ligula lacinia tempus vitae vitae metus. Aliquam viverra vel felis eget interdum. Fusce vestibulum felis at dolor congue pharetra. Etiam iaculis vitae turpis vitae cursus. Aenean id dignissim urna, non rutrum nunc.
Integer nec lectus et ante consectetur consequat. Donec congue odio lacus. Integer ultrices sem vitae volutpat congue. In hac habitasse platea dictumst. In et sapien sem. Cras quis justo leo. Mauris sit amet mauris velit. Vivamus varius justo lectus, ut venenatis diam porta ut. Donec hendrerit arcu nisl, ut auctor diam vulputate vitae. Nulla facilisis leo facilisis, accumsan orci sed, lobortis purus. Aenean felis tortor, lacinia at porta quis, dapibus vel dui. Nullam sed nibh porta, tincidunt felis ac, condimentum erat. Vestibulum venenatis auctor aliquet.`,
		date: new Date(),
		venue: 'Badagry',
		view: 100,
		likes: 200,
		comments: 18,
		interests: 10,
		image: require('@assets/img/svgs/dummyD.png'),
	},
	{
		id: '5',
		title: 'The Beleivers Tabernacle',
		subTitle: 'Praise Worship Friday',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
    Fusce volutpat turpis nec fermentum condimentum. Pellentesque enim sem, ullamcorper a arcu nec, laoreet tempus orci. Fusce in arcu nec ligula lacinia tempus vitae vitae metus. Aliquam viverra vel felis eget interdum. Fusce vestibulum felis at dolor congue pharetra. Etiam iaculis vitae turpis vitae cursus. Aenean id dignissim urna, non rutrum nunc.
Integer nec lectus et ante consectetur consequat. Donec congue odio lacus. Integer ultrices sem vitae volutpat congue. In hac habitasse platea dictumst. In et sapien sem. Cras quis justo leo. Mauris sit amet mauris velit. Vivamus varius justo lectus, ut venenatis diam porta ut. Donec hendrerit arcu nisl, ut auctor diam vulputate vitae. Nulla facilisis leo facilisis, accumsan orci sed, lobortis purus. Aenean felis tortor, lacinia at porta quis, dapibus vel dui. Nullam sed nibh porta, tincidunt felis ac, condimentum erat. Vestibulum venenatis auctor aliquet.`,
		date: new Date(),
		venue: 'Badagry',
		view: 100,
		likes: 200,
		comments: 18,
		interests: 10,
		image: require('@assets/img/svgs/dummyA.png'),
	},
	{
		id: '6',
		title: 'The Beleivers Tabernacle',
		subTitle: 'Praise Worship Friday',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
    Fusce volutpat turpis nec fermentum condimentum. Pellentesque enim sem, ullamcorper a arcu nec, laoreet tempus orci. Fusce in arcu nec ligula lacinia tempus vitae vitae metus. Aliquam viverra vel felis eget interdum. Fusce vestibulum felis at dolor congue pharetra. Etiam iaculis vitae turpis vitae cursus. Aenean id dignissim urna, non rutrum nunc.
Integer nec lectus et ante consectetur consequat. Donec congue odio lacus. Integer ultrices sem vitae volutpat congue. In hac habitasse platea dictumst. In et sapien sem. Cras quis justo leo. Mauris sit amet mauris velit. Vivamus varius justo lectus, ut venenatis diam porta ut. Donec hendrerit arcu nisl, ut auctor diam vulputate vitae. Nulla facilisis leo facilisis, accumsan orci sed, lobortis purus. Aenean felis tortor, lacinia at porta quis, dapibus vel dui. Nullam sed nibh porta, tincidunt felis ac, condimentum erat. Vestibulum venenatis auctor aliquet.`,
		date: new Date(),
		venue: 'Badagry',
		view: 100,
		likes: 200,
		comments: 18,
		interests: 10,
		image: require('@assets/img/svgs/dummyD.png'),
	},
	{
		id: '7',
		title: 'The Beleivers Tabernacle',
		subTitle: 'Praise Worship Friday',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
    Fusce volutpat turpis nec fermentum condimentum. Pellentesque enim sem, ullamcorper a arcu nec, laoreet tempus orci. Fusce in arcu nec ligula lacinia tempus vitae vitae metus. Aliquam viverra vel felis eget interdum. Fusce vestibulum felis at dolor congue pharetra. Etiam iaculis vitae turpis vitae cursus. Aenean id dignissim urna, non rutrum nunc.
Integer nec lectus et ante consectetur consequat. Donec congue odio lacus. Integer ultrices sem vitae volutpat congue. In hac habitasse platea dictumst. In et sapien sem. Cras quis justo leo. Mauris sit amet mauris velit. Vivamus varius justo lectus, ut venenatis diam porta ut. Donec hendrerit arcu nisl, ut auctor diam vulputate vitae. Nulla facilisis leo facilisis, accumsan orci sed, lobortis purus. Aenean felis tortor, lacinia at porta quis, dapibus vel dui. Nullam sed nibh porta, tincidunt felis ac, condimentum erat. Vestibulum venenatis auctor aliquet.`,
		date: new Date(),
		venue: 'Badagry',
		view: 100,
		likes: 200,
		comments: 18,
		interests: 10,
		image: require('@assets/img/svgs/dummyB.png'),
	},
	{
		id: '8',
		title: 'The Beleivers Tabernacle',
		subTitle: 'Praise Worship Friday',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
    Fusce volutpat turpis nec fermentum condimentum. Pellentesque enim sem, ullamcorper a arcu nec, laoreet tempus orci. Fusce in arcu nec ligula lacinia tempus vitae vitae metus. Aliquam viverra vel felis eget interdum. Fusce vestibulum felis at dolor congue pharetra. Etiam iaculis vitae turpis vitae cursus. Aenean id dignissim urna, non rutrum nunc.
Integer nec lectus et ante consectetur consequat. Donec congue odio lacus. Integer ultrices sem vitae volutpat congue. In hac habitasse platea dictumst. In et sapien sem. Cras quis justo leo. Mauris sit amet mauris velit. Vivamus varius justo lectus, ut venenatis diam porta ut. Donec hendrerit arcu nisl, ut auctor diam vulputate vitae. Nulla facilisis leo facilisis, accumsan orci sed, lobortis purus. Aenean felis tortor, lacinia at porta quis, dapibus vel dui. Nullam sed nibh porta, tincidunt felis ac, condimentum erat. Vestibulum venenatis auctor aliquet.`,
		date: new Date(),
		venue: 'Badagry',
		view: 100,
		likes: 200,
		comments: 18,
		interests: 10,
		image: require('@assets/img/svgs/dummyC.png'),
	},
]

export const StreamingData: IStreamEvent[] = [
	{
		section: 'Prayer Points',
		content: `# h1 Heading
 
**Lorem ipsum dolor sit amet!**
 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
`,
	},
	{
		section: 'Hymms',
		content: `1. First item
2. Second item
3. Third item
4. Fourth item`,
	},
	{
		section: 'Sermon',
		content: `# h1 Heading
 
**Lorem ipsum dolor sit amet!**
 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
`,
	},
	{
		section: 'Simple ways to ',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
    Fusce volutpat turpis nec fermentum condimentum. Pellentesque enim sem, ullamcorper a arcu nec, laoreet tempus orci. Fusce in arcu nec ligula lacinia tempus vitae vitae metus. Aliquam viverra vel felis eget interdum. Fusce vestibulum felis at dolor congue pharetra. Etiam iaculis vitae turpis vitae cursus. Aenean id dignissim urna, non rutrum nunc.
Integer nec lectus et ante consectetur consequat. Donec congue odio lacus. Integer ultrices sem vitae volutpat congue. In hac habitasse platea dictumst. In et sapien sem. Cras quis justo leo. Mauris sit amet mauris velit. Vivamus varius justo lectus, ut venenatis diam porta ut. Donec hendrerit arcu nisl, ut auctor diam vulputate vitae. Nulla facilisis leo facilisis, accumsan orci sed, lobortis purus. Aenean felis tortor, lacinia at porta quis, dapibus vel dui. Nullam sed nibh porta, tincidunt felis ac, condimentum erat. Vestibulum venenatis auctor aliquet.`,
	},
	{
		section: 'Announcements',
		content: `# h1 Heading
 
**This is some bold text!**
 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend felis et neque sagittis aliquet hendrerit id magna. Ut volutpat pellentesque enim id bibendum. Sed a aliquam risus. Praesent fringilla dolor arcu, in ultricies diam sollicitudin dignissim. Donec eu mauris vitae massa sodales porta bibendum et nisi. Aliquam in aliquam dui. Duis tristique sem in sagittis vestibulum. Fusce ut ultricies turpis, vitae mattis neque. Morbi convallis arcu ut blandit tristique.
`,
	},
	{
		section: 'Upcomming Events ',
		events: [
			{ image: require('@assets/img/pngs/churchBanner.png'), id: '1' },
			{ image: require('@assets/img/pngs/churchBanner.png'), id: '2' },
			{ image: require('@assets/img/pngs/churchBanner.png'), id: '3' },
			{ image: require('@assets/img/pngs/churchBanner.png'), id: '4' },
			{ image: require('@assets/img/pngs/churchBanner.png'), id: '5' },
		],
	},
]

export const TranscriptText: ITranscript = {
	eventTitle: "The Beleiver's book wednesday meetings",
	status: 'Live',
	views: 3000,
	transcript: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit velit ac mi iaculis, quis accumsan diam blandit. Morbi pharetra leovulputate quam vestibulum, ac interdum tellus sollicitudin. Fusce vel consequat massa. 

Aenean non lorem fermentum risus viverra ultrices vel at sem. Fusce in imperdiet eros. Pellentesque molestie porttitor felis, sit amet sollicitudin diam porttitor ac. Nullam et ex id ex interdum dignissim at vitae orci. Sed dictum erat dolor, nec dignissimorci ultricies at. Suspendisse arcu lectus, blandit eu condimentum nec, dignissim eget nisl. Phasellus pretium dignissim ligula, nec dapibus urna facilisis id. Donec at massa egestas, egestas dui sitamet, dapibus dolor. 

Pellentesque malesuada placerat magna sit amet ornare. Nullam nec malesuada libero. Aliquam varius aliquam dolor, eget cursus libero imperdiet eget. Suspendisse eu erat iaculis, volutpat mauris ac, ullamcorper dui. Suspendisse accumsan vitae dolor non viverra. Etiam eu eros turpis. Fusce in nisl sit amet dui bibendum imperdiet. Proin ac ante vitae ex vestibulum egestas. Nunc ultricies velit a elementum suscipit. Proin nibh tellus, eleifend vel ligula vel, iaculis sodales orci. Nulla urna nulla, euismod porttitor orci sed, dapibus ultrices neque. 

Maecenas leo velit, ultrices eget pretiumin, feugiat eget risus. Morbi id lectus vehicula, vestibulum diam at, dictum enim. Mauris lobortis massa sit amet dui finibus tincidunt. Fusce id pretium justo. Morbi id ante ac purus aliquet fermentum. Sed placerat consequat pharetra. 

Aliquam nisi quam, rutrum sit amet elit et, faucibus ultricies massa. Sed bibendum ante urna. Curabitur eu congue eros. Cras tempus eros tellus, dapibus pulvinar metus consectetur ac. Suspendisse et facilisis felis. Pellentesque dictum arcu tincidunt ipsum posuere, eu fermentum enim dictum. Aenean eget leo eros. Pellentesque pretium feugiat orci eu commodo. Morbi sollicitudin porta fermentum. Donec eget vulputate tortor. Aliquam sed erat volutpat, tristique sem sed, malesuada nunc. Nulla efficitur ex eget odio malesuada sollicitudin. Quisque nisi erat, vestibulum in posuere nec, rutrum sed neque. Sed feugiat in tellus suscipit efficitur. Integer sollicitudin tempus tempus. Pellentesque cursus sapien nec nunc cursus, eu maximus erat varius.`,
}

export const NotesData: Note[] = [
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 1,
	},
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 2,
	},
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 3,
	},
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 4,
	},
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 5,
	},
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 6,
	},
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 7,
	},
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 8,
	},
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 9,
	},
	{
		createdAt: new Date(),
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae malesuada ligula, non pharetra dolor. \nUt et arcu eu mauris vestibulum laoreet et et purus. Integer est quam, semper vel lacus id, molestie vulputate mi. Vestibulum ullamcorper odio vitae iaculis rhoncus. Aenean elementum, ligula in vehicula pellentesque, augue sapien pretium odio, in maximus odio nunc vel dolor. Curabitur fermentum nisl lacus, vel placerat magna faucibus vehicula. Integer efficitur velit sed tincidunt blandit. Proin sed risus arcu. Suspendisse eu odio cursus, blandit lectus vitae, pharetra quam. Vivamus placerat sollicitudin arcu, eget sollicitudin dui ullamcorper nec. Ut velit enim, malesuada ultricies tempor in, lacinia eu dolor. Cras consequat lectus eu eros facilisis consectetur. Proin non leo tincidunt, sagittis quam quis, eleifend arcu. Proin sagittis enim non enim imperdiet, a congue ante vestibulum. Morbi turpis nibh, molestie vitae pharetra posuere, consectetur in mauris. Cras pretium elementum justo.Donec porttitor dignissim euismod. Sed molestie felis ac tellus facilisis, vel placerat metus pharetra. Donec sed pulvinar purus, quis volutpat est. Integer tincidunt interdum sollicitudin. In congue quam efficitur, suscipit tellus a, sagittis est. Nulla dapibus, massa et vulputate mollis, metus felis efficitur velit, auctor porttitor est lorem sit amet nibh. Nullam ac laoreet velit, ultrices semper mi.Vestibulum malesuada elit at odio porttitor aliquet elementum ac purus. Morbi luctus porta risus, eget viverra metus tincidunt quis. Nulla nec augue enim. Vivamus fringilla nunc eu augue suscipit, non dignissim ligula posuere. Vivamus molestie neque mi, ac sodales neque dictum vitae. Curabitur tempus massa sapien, in aliquet quam imperdiet sit amet. Vestibulum sagittis, libero vitae rhoncus egestas, nisl velit blandit enim, ac tristique tellus mi et ex. Duis tempus eu est ultrices dictum. Proin congue purus quis eleifend ultrices. \n \nIn libero risus, sagittis id elit id, volutpat sollicitudin mi. Praesent consectetur ut ipsum id iaculis.`,
		id: 10,
	},
]

export const NotificationsData: Notification[] = [
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '1',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '2',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '3',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '4',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '5',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '6',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '7',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '8',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '9',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '10',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '11',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '12',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '13',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '14',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '15',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '16',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '17',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '18',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '19',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '20',
	},
	{
		content:
			'Welcome to Elroi, update your profile and dont forget to invite your friends to share awesome events together',
		id: '21',
	},
]

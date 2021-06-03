import { IStreamEvent, ITranscript } from '@types'

const data: IStreamEvent[] = [
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

export default data

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

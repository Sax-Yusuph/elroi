import { FilterList } from '@models/app.model'
import { EventData } from '@types'

const Filters: FilterList = [
	'Today',
	'Tomorrow',
	'This week',
	'This month',
	'Next week',
	'Next month',
]

export default Filters

export const Data: EventData[] = [
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

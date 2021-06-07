import { IMessage } from '@types'

const Data: IMessage[] = [
	{
		_id: 3,
		text: 'My message',
		createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
		user: {
			_id: 2,
			name: 'sax',
			// avatar: 'https://facebook.github.io/react/img/logo_og.png',
		},
		// image: 'https://facebook.github.io/react/img/logo_og.png',
		// You can also add a video prop:
		// video:
		//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
		// Mark the message as sent, using one tick
		sent: true,
		// Mark the message as received, using two tick
		received: true,
		// Mark the message as pending with a clock loader
		pending: true,
		// Any additional custom parameters are passed through
	},
	{
		_id: 1,
		text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
		createdAt: new Date(),
		quickReplies: {
			type: 'radio', // or 'checkbox',
			keepIt: true,
			values: [
				{
					title: '😋 Yes',
					value: 'yes',
				},
				{
					title: '📷 Yes, let me show you with a picture!',
					value: 'yes_picture',
				},
				{
					title: '😞 Nope. What?',
					value: 'no',
				},
			],
		},
		user: {
			_id: 2,
			name: 'React Native',
		},
	},
	{
		_id: 3,
		text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
		createdAt: new Date(),
		quickReplies: {
			type: 'checkbox', // or 'radio',
			values: [
				{
					title: 'Yes',
					value: 'yes',
				},
				{
					title: 'Yes, let me show you with a picture!',
					value: 'yes_picture',
				},
				{
					title: 'Nope. What?',
					value: 'no',
				},
			],
		},
		user: {
			_id: 2,
			name: 'React Native',
		},
	},
]

export default Data

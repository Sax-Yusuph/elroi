import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Platform } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import RNDraftView from 'react-native-draftjs-editor'
import { Div, Text } from 'react-native-magnus'
import { IconButton } from '@elements'

const ControlButton = ({ text, action, isActive }: any) => {
	return (
		<IconButton
			bg={isActive ? 'yellow600' : undefined}
			p='lg'
			rounded='sm'
			// style={[styles.controlButtonContainer, isActive ? { backgroundColor: 'blue' } : {}]}
			onPress={action}
		>
			<Text color={'textLight'} fontWeight='bold'>
				{text}
			</Text>
		</IconButton>
	)
}

const EditorToolBar = ({ activeStyles, blockType, toggleStyle, toggleBlockType }: any) => {
	return (
		<Div h={56} row bg='blue800' alignItems='center' justifyContent='space-around'>
			<ControlButton
				text={'B'}
				isActive={activeStyles.includes('BOLD')}
				action={() => toggleStyle('BOLD')}
			/>
			<ControlButton
				text={'I'}
				isActive={activeStyles.includes('ITALIC')}
				action={() => toggleStyle('ITALIC')}
			/>
			<ControlButton
				text={'H'}
				isActive={blockType === 'header-one'}
				action={() => toggleBlockType('header-one')}
			/>
			<ControlButton
				text={'ul'}
				isActive={blockType === 'unordered-list-item'}
				action={() => toggleBlockType('unordered-list-item')}
			/>
			<ControlButton
				text={'ol'}
				isActive={blockType === 'ordered-list-item'}
				action={() => toggleBlockType('ordered-list-item')}
			/>
			<ControlButton
				text={'--'}
				isActive={activeStyles.includes('STRIKETHROUGH')}
				action={() => toggleStyle('STRIKETHROUGH')}
			/>
		</Div>
	)
}

const styleMap = {
	STRIKETHROUGH: {
		textDecoration: 'line-through',
	},
}

const NotesEditor = () => {
	const _draftRef = useRef<any>(null)
	const [activeStyles, setActiveStyles] = useState([])
	const [blockType, setActiveBlockType] = useState('unstyled')
	const [editorState, setEditorState] = useState('')

	const defaultValue =
		'<h1>Type anything here</h1><p><br></p><p>This is a simple implementation</p><ul>  <li>It contains <strong>Text formatting </strong>and <em>Some blocks formatting</em></li>  <li>Each for it’s own purpose</li></ul><p>You can also do</p><ol>  <li>Custom style map</li>  <li>Own css styles</li>  <li>Custom block styling</li></ol><p>You are welcome to try it!</p>'

	const editorLoaded = () => {
		_draftRef.current && _draftRef.current?.focus()
	}

	const toggleStyle = (style: any) => {
		_draftRef.current && _draftRef.current.setStyle(style)
	}

	const toggleBlockType = (blockType: any) => {
		_draftRef.current && _draftRef.current.setBlockType(blockType)
	}

	useEffect(() => {
		/**
		 * Get the current editor state in HTML.
		 * Usually keep it in the submit or next action to get output after user has typed.
		 */
		setEditorState(_draftRef.current ? _draftRef.current.getEditorState() : '')
	}, [_draftRef])
	console.log(editorState)

	return (
		<SafeAreaView
			style={{
				flex: 1,
				marginTop: 36,
			}}
		>
			<Div px='xl' flex={1}>
				<RNDraftView
					defaultValue={defaultValue}
					onEditorReady={editorLoaded}
					style={{ flex: 1 }}
					placeholder={'Add text here...'}
					ref={_draftRef}
					onStyleChanged={setActiveStyles}
					onBlockTypeChanged={setActiveBlockType}
					styleMap={styleMap}
				/>
			</Div>
			<EditorToolBar
				activeStyles={activeStyles}
				blockType={blockType}
				toggleStyle={toggleStyle}
				toggleBlockType={toggleBlockType}
			/>
			{Platform.OS === 'ios' ? <KeyboardSpacer /> : null}
		</SafeAreaView>
	)
}

export default NotesEditor

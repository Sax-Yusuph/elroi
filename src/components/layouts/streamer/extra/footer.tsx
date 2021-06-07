import React, { memo, useCallback, useMemo, useRef, useState } from 'react'
import { BlurredBackground /*NotesEditor*/ } from '@elements'
import { ModalAction, ModalTypes } from '@types'
import { Div } from 'react-native-magnus'
import BottomNav from 'components/elements/all/streamerBottomNav'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ChatRoom, FollowHost, ReportHost, Participants, ReviewEvent, TextEditor } from '@layouts'

interface Props {
	leaveEvent: () => void
}

const footerHeight = 100

const FooterMenu = memo(({ leaveEvent }: Props) => {
	const [audioActive, setAudioActive] = useState<boolean>(false)
	const [muted, setMuted] = useState<boolean>(false)
	const [liked, setLiked] = useState<boolean>(false)

	const { bottom } = useSafeAreaInsets()

	// refs
	const participantRef = useRef<BottomSheetModal>(null)
	const followRef = useRef<BottomSheetModal>(null)
	const reviewRef = useRef<BottomSheetModal>(null)
	const reportRef = useRef<BottomSheetModal>(null)
	const notesRef = useRef<BottomSheetModal>(null)
	const chatsRef = useRef<BottomSheetModal>(null)

	// hooks
	const { top: topSafeArea } = useSafeAreaInsets()
	// variables
	const snapPointA = useMemo(() => ['25%', '50%'], [])
	const snapPointB = useMemo(() => ['20%'], [])
	const snapPointC = useMemo(() => ['20%', '45%'], [])
	const snapPointD = useMemo(() => ['45%', '80%', '100%'], [])
	const snapPointE = useMemo(() => ['100%'], [])

	const [modalType, setModalType] = useState<ModalTypes>(null)

	// const bottomModal = useRef<BottomSheetModal>(null!);

	// callbacks
	const showModal = useCallback(({ type, close }: ModalAction) => {
		setModalType(type)
		switch (type) {
			case 'chats':
				close ? chatsRef.current?.dismiss() : chatsRef.current?.present()
				break
			case 'particpants':
				close ? participantRef.current?.dismiss() : participantRef.current?.present()
				break
			case 'follow':
				close ? followRef.current?.dismiss() : followRef.current?.present()
				break
			case 'review':
				close ? reviewRef.current?.dismiss() : reviewRef.current?.present()
				break
			case 'report':
				close ? reportRef.current?.dismiss() : reportRef.current?.present()
				break
			case 'notes':
				close ? notesRef.current?.dismiss() : notesRef.current?.present()
				break
			default:
				break
		}
	}, [])

	const handleMenuPress = useCallback(({ type }: { type: string }) => {
		switch (type) {
			case 'mic':
				setMuted(prev => !prev)
				break
			case 'audio':
				setAudioActive(prev => !prev)
				break
			case 'like':
				setLiked(prev => !prev)
				break
			case 'exit':
				leaveEvent()
				break
			default:
				break
		}
	}, [])

	const onFinishRating = (rating: number, callback: () => void) => {
		console.log(rating)
		// reviewRef.current?.snapTo(1);
		callback()
	}

	const onFinishReview = (data: any) => {
		console.log(data)
	}

	return (
		<Div borderTopColor='gray200' bg='white' borderTopWidth={1} position='absolute' {...{ bottom }}>
			<BottomNav
				{...{
					showModal,
					handleMenuPress,
					liked,
					audioActive,
					muted,
				}}
			/>

			{/* modals */}
			<BottomSheetModal
				name='participant'
				ref={participantRef}
				snapPoints={snapPointA}
				children={<Participants {...{ showModal }} />}
				backdropComponent={BlurredBackground}
			/>

			<BottomSheetModal
				name='follow'
				ref={followRef}
				snapPoints={snapPointB}
				backdropComponent={BlurredBackground}
				children={<FollowHost {...{ showModal }} />}
			/>

			<BottomSheetModal
				name='report'
				ref={reportRef}
				snapPoints={snapPointA}
				backdropComponent={BlurredBackground}
				children={<ReportHost {...{ showModal }} />}
			/>

			<BottomSheetModal
				name='review'
				ref={reviewRef}
				snapPoints={snapPointC}
				backdropComponent={BlurredBackground}
				children={<ReviewEvent {...{ onFinishRating, onFinishReview, showModal }} />}
			/>

			<BottomSheetModal
				name='notes'
				ref={notesRef}
				snapPoints={snapPointD}
				backdropComponent={BlurredBackground}
				children={<TextEditor />}
			/>

			<BottomSheetModal
				name='notes'
				ref={chatsRef}
				snapPoints={snapPointE}
				backdropComponent={BlurredBackground}
				topInset={topSafeArea}
				children={<ChatRoom {...{ showModal }} />}
			/>
		</Div>
	)
})

export default FooterMenu

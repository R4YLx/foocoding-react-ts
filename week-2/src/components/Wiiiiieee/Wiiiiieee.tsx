import './Wiiiiieee.css'
const Wiiiiieee = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 230 130'
			className={className}
		>
			<svg id='rainbow' y='58.5'>
				<defs>
					<linearGradient id='RainbowGradient' gradientTransform='rotate(90)'>
						<stop offset='0%' stopColor='#FD1B00' />
						<stop offset='16.66%' stopColor='#FD1B00' />
						<stop offset='16.67%' stopColor='#FD9B01' />
						<stop offset='33.33%' stopColor='#FD9B01' />
						<stop offset='33.34%' stopColor='#FDEF01' />
						<stop offset='49.99%' stopColor='#FDEF01' />
						<stop offset='50.00%' stopColor='#20DB01' />
						<stop offset='66.66%' stopColor='#20DB01' />
						<stop offset='66.67%' stopColor='#008AFC' />
						<stop offset='83.33%' stopColor='#008AFC' />
						<stop offset='83.34%' stopColor='#6D3FFC' />
						<stop offset='100%' stopColor='#6D3FFC' />
					</linearGradient>
				</defs>

				<g className='rainbow-container'>
					<rect
						className='rainbow-piece rainbow-piece0'
						width='30'
						height='54'
						fill="url('#RainbowGradient')"
					>
						<animateTransform
							attributeName='transform'
							type='translate'
							values='0 -5; 0 -5; 0 5;  0 5'
							dur='0.42s'
							repeatCount='indefinite'
						/>
					</rect>
					<rect
						className='rainbow-piece rainbow-piece1'
						x='29.5'
						width='30'
						height='54'
						fill="url('#RainbowGradient')"
					/>
					<rect
						className='rainbow-piece rainbow-piece0'
						x='59'
						width='30'
						height='54'
						fill="url('#RainbowGradient')"
					/>
					<rect
						className='rainbow-piece rainbow-piece1'
						x='88.5'
						width='30'
						height='54'
						fill="url('#RainbowGradient')"
					/>
					<rect
						className='rainbow-piece rainbow-piece0'
						x='118'
						width='30'
						height='54'
						fill="url('#RainbowGradient')"
					/>
				</g>
			</svg>

			<svg
				id='cat'
				x='120'
				y='58.5'
				width='102'
				height='73'
				viewBox='0 0 34 21'
				preserveAspectRatio='xMinYMin meet'
			>
				<g id='cat-frame1' className='cat-frame'>
					<g
						transform='translate(1,0)'
						id='layer1'
						style={{ display: 'inline' }}
					>
						<g transform='translate(4,-1032.3622)' id='g3832'>
							<path
								d='m 0,50 0,-3 1,0 0,-1 4,0 0,3 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3050'
								style={{ fill: '#000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 1,49 0,-2 3,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3830'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(4,-1032.3622)' id='g3841'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3836'
								style={{ fill: '#000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='rect3838'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='matrix(-1,0,0,1,29,-1032.3622)' id='g3935'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3937'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='path3939'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(0,-1032.3622)' id='g3948'>
							<path
								d='m 24,49 0,-1 4,0 0,1 -1,0 0,1 -2,0 0,-1 z'
								transform='translate(0,1002.3622)'
								id='path3941'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 25,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='rect3943'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(0,-1032.3622)' id='layer1-0'>
							<path
								d='m 7,1033.3622 19,0 0,16 -19,0 z'
								id='rect5270'
								style={{ fill: '#ffcc99', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z'
								id='path5272'
								style={{ fill: '#ff99ff', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z'
								id='rect5030-3-6'
								style={{ fill: '#ff3399', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z'
								id='path5412'
								style={{ fill: '#000000', fillOpacity: 1 }}
							/>
						</g>
						<g transform='translate(6,0)' id='layer3'>
							<g id='g5869'>
								<path
									d='m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z'
									id='path5777'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z'
									id='rect5496-38'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 12,13 2,0 0,2 -2,0 z'
									id='rect5779'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,13 2,0 0,2 -2,0 z'
									id='rect5781'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z'
									id='path5785'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 19,12 1,0 0,1 -1,0 z'
									id='rect5787'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<g id='g5857'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5795'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5797'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
								<g transform='translate(-7,0)' id='g5861'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5863'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5865'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
							</g>
						</g>
						<g id='g3486'>
							<path
								d='M 0,10 0,7 4,7 4,8 5,8 5,9 6,9 6,14 5,14 5,13 3,13 3,12 2,12 2,11 1,11 1,10 z'
								id='path3954'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 1,9 0,-1 2,0 0,1 1,0 0,1 1,0 0,1 1,0 0,1 -2,0 0,-1 -1,0 0,-1 -1,0 0,-1 z'
								id='path3956'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
					</g>
				</g>

				<g id='cat-frame2' className='cat-frame'>
					<g transform='translate(1,-1)' id='g4196'>
						<g transform='translate(0,-1031.3622)' id='layer1'>
							<g id='g3982'>
								<path
									d='m 5,20 0,-3 1,0 0,-1 3,0 0,3 -1,0 0,1 z'
									transform='translate(0,1032.3622)'
									id='path3977'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 6,17 2,0 0,2 -2,0 z'
									transform='translate(0,1032.3622)'
									id='rect3979'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
							</g>
							<g transform='matrix(-1,0,0,1,20,0)' id='g3841'>
								<path
									d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
									transform='translate(0,1002.3622)'
									id='path3836'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 7,48 2,0 0,1 -2,0 z'
									transform='translate(0,1002.3622)'
									id='rect3838'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
							</g>
							<g transform='matrix(-1,0,0,1,30,0)' id='g3935'>
								<path
									d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
									transform='translate(0,1002.3622)'
									id='path3937'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 7,48 2,0 0,1 -2,0 z'
									transform='translate(0,1002.3622)'
									id='path3939'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
							</g>
							<g id='layer1-0'>
								<path
									d='m 7,1033.3622 19,0 0,16 -19,0 z'
									id='rect5270'
									style={{ fill: '#ffcc99', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z'
									id='path5272'
									style={{ fill: '#ff99ff', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z'
									id='rect5030-3-6'
									style={{ fill: '#ff3399', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z'
									id='path5412'
									style={{ fill: '#000000', fillOpacity: 1 }}
								/>
							</g>
							<g transform='translate(7,1032.3622)' id='layer3'>
								<g id='g5869'>
									<path
										d='m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z'
										id='path5777'
										style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z'
										id='rect5496-38'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 12,13 2,0 0,2 -2,0 z'
										id='rect5779'
										style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 23,13 2,0 0,2 -2,0 z'
										id='rect5781'
										style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z'
										id='path5785'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 19,12 1,0 0,1 -1,0 z'
										id='rect5787'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<g id='g5857'>
										<path
											d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
											id='path5795'
											style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
										/>
										<path
											d='m 21,11 1,0 0,1 -1,0 z'
											id='path5797'
											style={{
												fill: '#ffffff',
												fillOpacity: 1,
												stroke: 'none'
											}}
										/>
									</g>
									<g transform='translate(-7,0)' id='g5861'>
										<path
											d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
											id='path5863'
											style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
										/>
										<path
											d='m 21,11 1,0 0,1 -1,0 z'
											id='path5865'
											style={{
												fill: '#ffffff',
												fillOpacity: 1,
												stroke: 'none'
											}}
										/>
									</g>
								</g>
							</g>
							<g transform='matrix(-1,0,0,1,35,0)' id='g3986'>
								<path
									d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
									transform='translate(0,1002.3622)'
									id='path3988'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 7,48 2,0 0,1 -2,0 z'
									transform='translate(0,1002.3622)'
									id='path3990'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
							</g>
							<g id='g3996'>
								<path
									d='m 1,12 -1,0 0,-2 1,0 0,-1 2,0 0,1 1,0 0,1 2,0 0,4 -2,0 0,-1 -2,0 0,-1 -1,0 z'
									transform='translate(0,1032.3622)'
									id='path3992'
									style={{ fill: '#000000', stroke: 'none' }}
								/>
								<path
									d='m 1,12 0,-2 2,0 0,2 3,0 0,2 -2,0 0,-1 -2,0 0,-1 z'
									transform='translate(0,1032.3622)'
									id='path3994'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
							</g>
						</g>
					</g>
				</g>

				<g id='cat-frame3' className='cat-frame'>
					<g transform='translate(1,1)' id='g4137'>
						<g id='g3806'>
							<path
								d='m 6,20 0,-4 4,0 0,3 -1,0 0,1 z'
								id='path3977'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,17 2,0 0,2 -2,0 z'
								id='rect3979'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='matrix(-1,0,0,1,21,-1032.3622)' id='g3841'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3836'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='rect3838'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='matrix(-1,0,0,1,31,-1032.3622)' id='g3935'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3937'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='path3939'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(0,-1032.3622)' id='layer1-0'>
							<path
								d='m 7,1033.3622 19,0 0,16 -19,0 z'
								id='rect5270'
								style={{ fill: '#ffcc99', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z'
								id='path5272'
								style={{ fill: '#ff99ff', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z'
								id='rect5030-3-6'
								style={{ fill: '#ff3399', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z'
								id='path5412'
								style={{ fill: '#000000', fillOpacity: 1 }}
							/>
						</g>
						<g transform='translate(7,0)' id='layer3'>
							<g id='g5869'>
								<path
									d='m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z'
									id='path5777'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z'
									id='rect5496-38'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 12,13 2,0 0,2 -2,0 z'
									id='rect5779'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,13 2,0 0,2 -2,0 z'
									id='rect5781'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z'
									id='path5785'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 19,12 1,0 0,1 -1,0 z'
									id='rect5787'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<g id='g5857'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5795'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5797'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
								<g transform='translate(-7,0)' id='g5861'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5863'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5865'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
							</g>
						</g>
						<g transform='matrix(-1,0,0,1,36,-1032.3622)' id='g3986'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3988'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='path3990'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g id='g4584'>
							<path
								d='m 0,14 0,-2 2,0 0,-1 3,0 0,-1 1,0 0,4 -1,0 0,1 -4,0 0,-1 z'
								id='path3812'
								style={{ fill: '#000000', stroke: 'none' }}
							/>
							<path
								d='m 1,14 0,-1 1,0 0,-1 4,0 0,1 -2,0 0,1 z'
								id='path3814'
								style={{ fill: '#999999', stroke: 'none' }}
							/>
						</g>
					</g>
				</g>

				<g id='cat-frame4' className='cat-frame'>
					<g transform='translate(1,0)' id='g4082'>
						<g transform='translate(0,-1031.3622)' id='g3982'>
							<path
								d='m 5,20 0,-3 1,0 0,-1 3,0 0,3 -1,0 0,1 z'
								transform='translate(0,1032.3622)'
								id='path3977-4'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 6,17 2,0 0,2 -2,0 z'
								transform='translate(0,1032.3622)'
								id='rect3979-3'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='matrix(-1,0,0,1,20,-1031.3622)' id='g3841'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3836'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='rect3838'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='matrix(-1,0,0,1,30,-1031.3622)' id='g3935'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3937'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='path3939'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(0,-1031.3622)' id='layer1-0'>
							<path
								d='m 7,1033.3622 19,0 0,16 -19,0 z'
								id='rect5270'
								style={{ fill: '#ffcc99', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z'
								id='path5272'
								style={{ fill: '#ff99ff', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z'
								id='rect5030-3-6'
								style={{ fill: '#ff3399', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z'
								id='path5412'
								style={{ fill: '#000000', fillOpacity: 1 }}
							/>
						</g>
						<g transform='translate(7,1)' id='layer3'>
							<g id='g5869'>
								<path
									d='m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z'
									id='path5777'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z'
									id='rect5496-38'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 12,13 2,0 0,2 -2,0 z'
									id='rect5779'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,13 2,0 0,2 -2,0 z'
									id='rect5781'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z'
									id='path5785'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 19,12 1,0 0,1 -1,0 z'
									id='rect5787'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<g id='g5857'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5795'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5797'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
								<g transform='translate(-7,0)' id='g5861'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5863'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5865'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
							</g>
						</g>
						<g transform='matrix(-1,0,0,1,35,-1031.3622)' id='g3986'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3988'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='path3990'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='matrix(1,0,0,-1,0,1058.3622)' id='g4887'>
							<path
								d='m 1,12 -1,0 0,-2 1,0 0,-1 2,0 0,1 1,0 0,1 2,0 0,4 -2,0 0,-1 -2,0 0,-1 -1,0 z'
								transform='translate(0,1032.3622)'
								id='path4889'
								style={{ fill: '#000000', stroke: 'none' }}
							/>
							<path
								d='m 1,12 0,-2 2,0 0,2 3,0 0,2 -2,0 0,-1 -2,0 0,-1 z'
								transform='translate(0,1032.3622)'
								id='path4891'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
					</g>
				</g>

				<g id='cat-frame5' className='cat-frame'>
					<g transform='translate(1,0)' id='g4025'>
						<g transform='translate(0,1)' id='g5089'>
							<path
								d='m 3,20 0,-3 1,0 0,-1 1,0 0,-1 3,0 0,3 -1,0 0,1 -1,0 0,1 z'
								id='path5085'
								style={{ fill: '#000000', stroke: 'none' }}
							/>
							<path
								d='m 4,19 0,-2 1,0 0,-1 2,0 0,2 -1,0 0,1 z'
								id='path5087'
								style={{ fill: '#999999', stroke: 'none' }}
							/>
						</g>
						<g transform='matrix(-1,0,0,1,20,-1031.3622)' id='g3841'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3836'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='rect3838'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='matrix(-1,0,0,1,28,-1031.3622)' id='g3935'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3937'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='path3939'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(0,-1031.3622)' id='layer1-0'>
							<path
								d='m 7,1033.3622 19,0 0,16 -19,0 z'
								id='rect5270'
								style={{ fill: '#ffcc99', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z'
								id='path5272'
								style={{ fill: '#ff99ff', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z'
								id='rect5030-3-6'
								style={{ fill: '#ff3399', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z'
								id='path5412'
								style={{ fill: '#000000', fillOpacity: 1 }}
							/>
						</g>
						<g transform='translate(6,1)' id='layer3'>
							<g id='g5869'>
								<path
									d='m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z'
									id='path5777'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z'
									id='rect5496-38'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 12,13 2,0 0,2 -2,0 z'
									id='rect5779'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,13 2,0 0,2 -2,0 z'
									id='rect5781'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z'
									id='path5785'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 19,12 1,0 0,1 -1,0 z'
									id='rect5787'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<g id='g5857'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5795'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5797'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
								<g transform='translate(-7,0)' id='g5861'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5863'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5865'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
							</g>
						</g>
						<g transform='matrix(-1,0,0,1,33,-1031.3622)' id='g3986'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3988'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='path3990'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(0,1)' id='g5097'>
							<path
								d='M -1,11 -1,9 0,9 0,8 4,8 4,9 6,9 6,13 4,13 4,12 1,12 1,11 z'
								id='path5093'
								style={{ fill: '#000000', stroke: 'none' }}
							/>
							<path
								d='m 0,10 0,-1 3,0 0,1 2,0 0,1 1,0 0,1 -1,0 0,-1 -4,0 0,-1 z'
								id='path5095'
								style={{ fill: '#999999', stroke: 'none' }}
							/>
						</g>
					</g>
				</g>

				<g id='cat-frame6' className='cat-frame'>
					<g transform='translate(1,0)' id='g3968'>
						<g transform='translate(0,1)' id='g5089'>
							<path
								d='m 3,20 0,-3 1,0 0,-1 1,0 0,-1 3,0 0,3 -1,0 0,1 -1,0 0,1 z'
								id='path5085'
								style={{ fill: '#000000', stroke: 'none' }}
							/>
							<path
								d='m 4,19 0,-2 1,0 0,-1 1,0 0,1 1,0 0,1 -1,0 0,1 z'
								id='path5087'
								style={{ fill: '#999999', stroke: 'none' }}
							/>
						</g>
						<g transform='matrix(-1,0,0,1,32,-1031.3622)' id='g3982'>
							<path
								d='m 5,20 0,-3 1,0 0,-1 3,0 0,3 -1,0 0,1 z'
								transform='translate(0,1032.3622)'
								id='path3977'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 6,17 2,0 0,2 -2,0 z'
								transform='translate(0,1032.3622)'
								id='rect3979'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(3,-1031.3622)' id='g3841'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3836'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='rect3838'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(12,-1031.3622)' id='g3935'>
							<path
								d='m 6,50 0,-2 4,0 0,1 -1,0 0,1 z'
								transform='translate(0,1002.3622)'
								id='path3937'
								style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 7,48 2,0 0,1 -2,0 z'
								transform='translate(0,1002.3622)'
								id='path3939'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
						<g transform='translate(0,-1031.3622)' id='layer1-0'>
							<path
								d='m 7,1033.3622 19,0 0,16 -19,0 z'
								id='rect5270'
								style={{ fill: '#ffcc99', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z'
								id='path5272'
								style={{ fill: '#ff99ff', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z'
								id='rect5030-3-6'
								style={{ fill: '#ff3399', fillOpacity: 1, stroke: 'none' }}
							/>
							<path
								d='m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z'
								id='path5412'
								style={{ fill: '#000000', fillOpacity: 1 }}
							/>
						</g>
						<g transform='translate(6,0)' id='layer3'>
							<g id='g5869'>
								<path
									d='m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z'
									id='path5777'
									style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z'
									id='rect5496-38'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 12,13 2,0 0,2 -2,0 z'
									id='rect5779'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 23,13 2,0 0,2 -2,0 z'
									id='rect5781'
									style={{ fill: '#ff9999', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z'
									id='path5785'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<path
									d='m 19,12 1,0 0,1 -1,0 z'
									id='rect5787'
									style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
								/>
								<g id='g5857'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5795'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5797'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
								<g transform='translate(-7,0)' id='g5861'>
									<path
										d='m 21,13 0,-1 1,0 0,-1 1,0 0,2 z'
										id='path5863'
										style={{ fill: '000000', fillOpacity: 1, stroke: 'none' }}
									/>
									<path
										d='m 21,11 1,0 0,1 -1,0 z'
										id='path5865'
										style={{ fill: '#ffffff', fillOpacity: 1, stroke: 'none' }}
									/>
								</g>
							</g>
						</g>
						<g transform='translate(0,-1033.3622)' id='g3996'>
							<path
								d='m 1,12 -1,0 0,-2 1,0 0,-1 2,0 0,1 1,0 0,1 2,0 0,4 -2,0 0,-1 -2,0 0,-1 -1,0 z'
								transform='translate(0,1032.3622)'
								id='path3992'
								style={{ fill: '#000000', stroke: 'none' }}
							/>
							<path
								d='m 1,12 0,-2 2,0 0,2 3,0 0,2 -2,0 0,-1 -2,0 0,-1 z'
								transform='translate(0,1032.3622)'
								id='path3994'
								style={{ fill: '#999999', fillOpacity: 1, stroke: 'none' }}
							/>
						</g>
					</g>
				</g>
			</svg>
		</svg>
	)
}

export default Wiiiiieee

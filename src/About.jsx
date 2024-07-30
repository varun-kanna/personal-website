import React from 'react';

function About() {
	return (
		<div className='bg-gray-700 text-white font-sans flex items-center justify-center min-h-screen max-660:pl-10px max-660:pr-10px'>
			<div className='max-w-2xl w-full justify-center'>
				<h1 className='text-3xl font-bold pb-4 pt-8'>Varun Kanna</h1>
				<div className='flex space-x-4 mb-8'>
					<a href='/' className='text-white-400 hover:text-gray-200'>
						Main
					</a>
					<h2 className='text-gray-400'>About</h2>
					<a
						href='mailto:varunkanna1@outlook.com'
						className='text-white-400 hover:text-gray-200'>
						Contact
					</a>
					<a
						href='/resume.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='text-white-400 hover:text-gray-200'>
						Resume
					</a>
				</div>

				<p className='pb-8'>
					Hello! I'm a Computer Science major at UC Santa Cruz, and I'm
					currently located in the SF Bay Area. I love sports (big Lakers fan),
					and enjoy playing video games. I'm always open to trying new avenues;
					feel free to reach
					<a href='mailto:varunkanna1@outlook.com' className='text-gray-400'>
						{' '}
						out!
					</a>
				</p>

				<div className='flex space-x-4 mt-8'>
					<a
						href='https://twitter.com/varunk_1'
						target='_blank'
						rel='noreferrer'
						className='text-gray-400 hover:text-gray-200'>
						Twitter
					</a>
					<a
						href='https://github.com/varun-kanna'
						target='_blank'
						rel='noreferrer'
						className='text-gray-400 hover:text-gray-200'>
						GitHub
					</a>
					<a
						href='https://www.linkedin.com/in/varun-kanna/'
						target='_blank'
						rel='noreferrer'
						className='text-gray-400 hover:text-gray-200'>
						LinkedIn
					</a>
				</div>
				<div className='mt-8 text-sm text-gray-400'>© Varun Kanna</div>
			</div>
		</div>
	);
}

export default About;

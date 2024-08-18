import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='bg-gray-700 text-white font-sans flex items-center justify-center min-h-screen max-660:pl-10px'>
			<div className='max-w-2xl justify-center'>
				<h1 className='text-3xl font-bold pb-4 pt-8'>Varun Kanna</h1>
				<div className='flex space-x-4 mb-8'>
					<h2 className='text-gray-400'>Main</h2>
					<Link to='/about' className='text-white-400 hover:text-gray-200'>
						About
					</Link>

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

				<h2 className='font-bold pb-6 text-lg text-zinc-300'>Experience</h2>
				<h3 className='text-secondary'>
					Building an internal app @{' '}
					<a
						href='https://www.inv8.com/'
						className='underline hover:text-gray-200'>
						Innovate Mobile
					</a>
				</h3>
				<h3>
					TypeScript, JavaScript, React.js, Express.js, Node.js, MongoDB, Python
				</h3>
				<h3 className='pb-6'>Spring 2024</h3>
				<h3 className='text-secondary'>
					Chosen to participate in the accelerate program @{' '}
					<a
						href='https://www.ibm.com/us-en'
						className='underline hover:text-gray-200'>
						IBM
					</a>
				</h3>
				<h3>
					JavaScript, React.js, Express.js, REST APIs, Generative AI, Cloud
					Development
				</h3>
				<h3 className='pb-6'>Summer 2024</h3>

				<h2 className='font-bold pb-6 text-lg text-zinc-300'>Projects</h2>
				<h3 className='text-secondary'>
					SpotYt -{' '}
					<a
						href='https://github.com/varun-kanna/SpotYt'
						className='underline hover:text-gray-200'>
						Github
					</a>
				</h3>
				<h3>Python, YouTube Music API, Exportify</h3>
				<h3>Summer 2023</h3>

				<h2 className='font-bold pb-6 pt-6 text-lg text-zinc-300'>
					Hackathons
				</h2>
				<h3 className='text-secondary'>
					SelfTour -{' '}
					<a
						href='https://devpost.com/software/selftours'
						className='underline hover:text-gray-200'>
						Devpost
					</a>
				</h3>
				<h3 className='pb-6'>SF Hacks 2024</h3>

				<h3 className='text-secondary'>
					SmokeScreen -{' '}
					<a
						href='https://devpost.com/software/smokescreen-tcq2j5'
						className='underline hover:text-gray-200'>
						Devpost
					</a>
				</h3>
				<h3>ACMHacks x GraceHacks 2023</h3>

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

export default Home;

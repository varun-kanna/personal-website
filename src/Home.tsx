import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='bg-darkBlue text-white font-sans flex items-center justify-center min-h-screen max-660:pl-10px'>
			<div className='max-w-2xl justify-center'>
				<h1 className='text-3xl font-bold pb-4 pt-8 text-gray-100'>
					Varun Kanna
				</h1>
				<div className='flex space-x-4 mb-8'>
					<h2 className='text-cyan-200'>Main</h2>
					<Link
						to='/about'
						className='text-gray-100 hover:text-gray-200'>
						About
					</Link>

					<a
						href='mailto:varunkanna1@outlook.com'
						className='text-gray-100 hover:text-gray-200'>
						Contact
					</a>
					<a
						href='/resume.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-100 hover:text-gray-200'>
						Resume
					</a>
				</div>

				<h2 className='font-bold pb-6 text-lg text-zinc-200'>
					Experience
				</h2>
				<h3 className='text-secondary'>
					SWE @{' '}
					<a
						href='https://www.ibm.com/us-en'
						className='underline hover:text-cyan-400'>
						Credo Semiconductor
					</a>
				</h3>
				<h3>Skills </h3>
				<h3 className='pb-6'>Current</h3>
				{/*  */}
				<h3 className='text-secondary'>
					Full-Stack Development for Data Visualization @{' '}
					<a
						href='https://www.ibm.com/us-en'
						className='underline hover:text-cyan-400'>
						Keysight Technologies
					</a>
				</h3>
				<h3>Angular, Python, InfluxDB, SQLite, Express.js </h3>
				<h3 className='pb-6'>Winter & Spring 2025</h3>
				{/*  */}
				<h3 className='text-secondary'>
					Testing, Automation, Pipelines @{' '}
					<a
						href='https://www.ibm.com/us-en'
						className='underline hover:text-cyan-400'>
						SS&C Technologies
					</a>
				</h3>
				<h3>Python, Jenkins, Groovy, Locust, React.js, Flask</h3>
				<h3 className='pb-6'>Summer 2024</h3>
				{/*  */}
				<h3 className='text-secondary'>
					Chosen to participate in the accelerate program @{' '}
					<a
						href='https://www.ibm.com/us-en'
						className='underline hover:text-cyan-400'>
						IBM
					</a>
				</h3>
				<h3>
					JavaScript, React.js, Express.js, REST APIs, Generative AI,
					Cloud Development
				</h3>
				<h3 className='pb-6'>Summer 2024</h3>
				{/*  */}
				<h3 className='text-secondary'>
					Building an internal app @{' '}
					<a
						href='https://www.inv8.com/'
						className='underline hover:text-cyan-400'>
						Innovate Mobile
					</a>
				</h3>
				<h3>
					TypeScript, JavaScript, React.js, Express.js, Node.js,
					MongoDB, Python
				</h3>
				<h3 className='pb-6'>Spring 2024</h3>

				<h2 className='font-bold pb-6 text-lg text-zinc-200'>
					Projects
				</h2>
				<h3 className='text-secondary'>
					SpotYt -{' '}
					<a
						href='https://github.com/varun-kanna/SpotYt'
						className='underline hover:text-cyan-400'>
						Github
					</a>
				</h3>
				<h3>Python, YouTube Music API, Exportify</h3>
				<h3>Summer 2023</h3>

				<h2 className='font-bold pb-6 pt-6 text-lg text-zinc-200'>
					Hackathons
				</h2>
				<h3 className='text-secondary'>
					MedSmart -{' '}
					<a
						href='https://devpost.com/software/medtalk-mv4xkc'
						className='underline hover:text-cyan-400'>
						Devpost
					</a>
				</h3>
				<h3 className='pb-6'>CalHacks 11.0 - 2024</h3>
				<h3 className='text-secondary'>
					SelfTour -{' '}
					<a
						href='https://devpost.com/software/selftours'
						className='underline hover:text-cyan-400'>
						Devpost
					</a>
				</h3>
				<h3 className='pb-6'>SF Hacks - 2024</h3>

				<h3 className='text-secondary'>
					SmokeScreen -{' '}
					<a
						href='https://devpost.com/software/smokescreen-tcq2j5'
						className='underline hover:text-cyan-400'>
						Devpost
					</a>
				</h3>
				<h3>ACMHacks x GraceHacks - 2023</h3>

				<div className='flex space-x-4 mt-8'>
					<a
						href='https://twitter.com/varunk_1'
						target='_blank'
						rel='noreferrer'
						className='text-gray-200 hover:text-gray-300'>
						Twitter
					</a>
					<a
						href='https://github.com/varun-kanna'
						target='_blank'
						rel='noreferrer'
						className='text-gray-200 hover:text-gray-300'>
						GitHub
					</a>
					<a
						href='https://www.linkedin.com/in/varun-kanna/'
						target='_blank'
						rel='noreferrer'
						className='text-gray-200 hover:text-gray-300'>
						LinkedIn
					</a>
				</div>
				<div className='mt-8 text-sm text-gray-200'>© Varun Kanna</div>
			</div>
		</div>
	);
}

export default Home;

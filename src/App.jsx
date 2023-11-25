import './App.scss'
import vanya from '/public/vanya.png'
import dasha from '/public/dasha.png'
import nikita from '/public/nikita.png'
import zhenya from '/public/zhenya.png'
import egor from '/public/egor.png'
const App = () => {
	return (
		<div className='layout'>
			<div className='block'>
				<img src={vanya} alt='' />
				<div className='text'>
					<div>Жуков Иван</div>
					<div className='btns'>
						<div>Frontend</div>
						<a href='https://t.me/ivan_zhuk0v'>@ivan_zhuk0v</a>
					</div>
				</div>
			</div>
			<div className='block'>
				<img src={dasha} alt='' />
				<div className='text'>
					<div>Ващенко Дарья</div>
					<div className='btns'>
						<div>Data Scientist</div>
						<a href='https://t.me/dar_vi'>@dar_vi</a>
					</div>
				</div>
			</div>
			<div className='block'>
				<img src={egor} alt='' />
				<div className='text'>
					<div>Шманев Егор</div>
					<div className='btns'>
						<div>UI/UX designer</div>
						<a href='https://t.me/YeG0h'>@YeG0h</a>
					</div>
				</div>
			</div>
			<div className='block'>
				<img src={zhenya} alt='' />
				<div className='text'>
					<div>Булатов Евгений</div>
					<div className='btns'>
						<div>Product Manager</div>
						<a href='https://t.me/bombomzhenya'>@bombomzhenya</a>
					</div>
				</div>
			</div>
			<div className='block'>
				<img src={nikita} alt='' />
				<div className='text'>
					<div>Болдырев Никита</div>
					<div className='btns'>
						<div>Backend</div>
						<a href='https://t.me/boldyrevnow'>@boldyrevnow</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

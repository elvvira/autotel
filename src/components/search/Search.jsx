import {
	CalendarReact,
	ContainerCalendarSearch,
	ContainerSearch,
	ImgSearch,
	StyledDay,
	StyledInput,
	StyledSearch
} from './styles';
import { useState } from 'react';

const Search = () => {
	const [showCalendar, setShowCalendar] = useState(false);
	return (
		<ContainerCalendarSearch>
			<ContainerSearch>
				<StyledSearch>
					<StyledInput type='text' placeholder='lugar' />
				</StyledSearch>
				<StyledSearch>
					<StyledDay onClick={() => setShowCalendar(!showCalendar)} on>
						day
					</StyledDay>
				</StyledSearch>
				<div>
					<select name='' id=''>
						<option value=''>Automóvil</option>
						<option value=''>Moto</option>
						<option value=''>Motocicleta</option>
						<option value=''>Furgoneta</option>
						<option value=''>Camioneta</option>
						<option value=''>Coche eléctrico</option>
						<option value=''>Monovolumen</option>
					</select>
				</div>
				<div>
					<ImgSearch src='assets/search.png' alt='' />
				</div>
			</ContainerSearch>
			{showCalendar && <CalendarReact />}
		</ContainerCalendarSearch>
	);
};
export default Search;

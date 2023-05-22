import {
	ContainerSearch,
	ImgSearch,
	StyledInput,
	StyledSearch
} from './styles';

const Search = () => {
	return (
		<ContainerSearch>
			<StyledSearch>
				<StyledInput type='text' placeholder='lugar' />
			</StyledSearch>
			<StyledSearch>
				<StyledInput type='text' placeholder='day' />
				<StyledInput type='text' placeholder='day' />
			</StyledSearch>
			<div>
				{/* <StyledInput type='select' placeholder='vehículo' /> */}
				<select name='' id=''>
					<option value=''>moto</option>
					<option value=''>biplaza</option>
					<option value=''>moto</option>
				</select>
			</div>
			<div>
				<ImgSearch src='assets/search.png' alt='' />
			</div>
		</ContainerSearch>
	);
};
export default Search;

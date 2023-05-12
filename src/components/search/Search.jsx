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
				<StyledInput type='text' placeholder='vehículo' />
			</div>
			<div>
				<ImgSearch src='assets/search.png' alt='' />
			</div>
		</ContainerSearch>
	);
};
export default Search;

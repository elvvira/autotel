import { useContext, useEffect, useState } from 'react';
import {
	ContainerYourPosts,
	IconEdit,
	ImageFooter,
	ModalTrash,
	StyledButtonTrash,
	StyledButtonTrashNo,
	YourPostImg
} from './styles';
import { AuthContext } from '../../contexts/Auth.context';
import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	where
} from 'firebase/firestore';
import { blogCollectionReference, db } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const YourPosts = () => {
	const navigate = useNavigate();

	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const [showTrash, setShowTrash] = useState(false);
	const [postId, setPostId] = useState();

	useEffect(() => {
		if (!currentUser) return;
		getUserPosts(currentUser, setPosts);
	}, [currentUser]);

	return (
		<ContainerYourPosts>
			{posts.map(post => {
				return (
					<div key={post.id}>
						<YourPostImg src={post.img} alt='' />
						<ImageFooter>
							<div>
								<p>{post.location}</p>
								<p>{post.price}€/hora</p>
							</div>

							<IconEdit
								onClick={() => {
									!setShowTrash(true), setPostId(post.id);
								}}
								src='assets/trash.svg'
								alt=''
							/>
						</ImageFooter>
					</div>
				);
			})}
			<ModalTrash showTrash={showTrash}>
				<p>¿Seguro que quieres borrar?</p>
				<div>
					<StyledButtonTrash
						onClick={() => deletePost(postId, setShowTrash, navigate)}
					>
						si
					</StyledButtonTrash>
					<StyledButtonTrashNo onClick={() => setShowTrash(false)}>
						no
					</StyledButtonTrashNo>
				</div>
			</ModalTrash>
		</ContainerYourPosts>
	);
};
const deletePost = async (id, setShowTrash, navigate) => {
	try {
		const postToDelete = doc(blogCollectionReference, id);
		await deleteDoc(postToDelete);
		setShowTrash(false);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
};
const getUserPosts = async (currentUser, setPosts) => {
	const q = query(
		collection(db, 'places'),
		where('email', '==', currentUser.email)
	);
	const querySnapshot = await getDocs(q);
	const data = [];
	querySnapshot.forEach(doc => data.push({ ...doc.data(), id: doc.id }));
	setPosts(data);
};

export default YourPosts;

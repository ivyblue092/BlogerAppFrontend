import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import PostCreate from '../../../components/crud/PostCreate';
import Link from 'next/link';

const Post = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new Post</h2>
                        </div>
                        <div className="col-md-12">
                            <PostCreate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Post;
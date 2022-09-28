import './style.css'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'

export const Posts = () => {

    const params = useParams();
    console.log(params);

    const { id } = useParams();
    const [qs] = useSearchParams();

    return (
        <div>
            {/* Exemplo: http://localhost:5173/posts/10?page=100 */}
            <h1>Posts {`Params: ${id}`} {`QS: ${qs.get('page')}`}</h1>
            <Outlet />
        </div>
    )
}
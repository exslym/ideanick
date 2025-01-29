import { useParams } from 'react-router-dom';
import { type ViewIdeaRouteParams } from '../../lib/routes';

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams;

  return (
    <div>
      <h1>{ideaNick}</h1>
      <p>Description of Idea 1...</p>
      <div>
        <p>Text paragraf 1 of Idea 1...</p>
        <p>Text paragraf 2 of Idea 1...</p>
        <p>Text paragraf 3 of Idea 1...</p>
      </div>
    </div>
  );
};

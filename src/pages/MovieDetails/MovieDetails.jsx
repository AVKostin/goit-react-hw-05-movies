import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { URL_POSTER } from '../../constants';
import noPoster from '../Cast/CastItem/No-photo-m.png';
import {
	Data,
	Head,
	Thumb,
	Title,
	Table,
	Rating,
	Details,
	Wrapper,
	Overview,
	Information,
	RatingAccent,
	AboutSubtitle,
} from './MovieDetails.styled';

export default function MovieDetails({
	title,
	genres,
	overview,
	vote_count,
	popularity,
	poster_path,
	vote_average,
	release_date,
	backdrop_path,
	original_title,
}) {
	return (
		<>
			<Wrapper>
				<Thumb>
					{poster_path !== null ? (
						<picture>
							<source
								srcSet={`${URL_POSTER}w500${poster_path}`}
								media="(min-width: 1024px)"
							/>
							<source
								srcSet={`${URL_POSTER}w342${poster_path}`}
								media="(min-width: 768px)"
							/>
							<img
								src={`${URL_POSTER}w342${backdrop_path}`}
								alt={title}
								loading="lazy"
							/>
						</picture>
					) : (
						<img src={noPoster} alt="no poster" loading="lazy" />
					)}
				</Thumb>

				<Details>
					<Title>{title}</Title>
					<Information>
						<Table>
							<tbody>
								<tr>
									<Head>Vote / Votes:</Head>
									<Data>
										<RatingAccent>
											{vote_average}
										</RatingAccent>
										/ <Rating>{vote_count}</Rating>
									</Data>
								</tr>
								<tr>
									<Head>Popularity:</Head>
									<Data>{popularity}</Data>
								</tr>
								<tr>
									<Head>Original title</Head>
									<Data>{original_title}</Data>
								</tr>
								<tr>
									<Head>Release date:</Head>
									<Data>{release_date}</Data>
								</tr>
								<tr>
									<Head>Genre:</Head>
									<Data>{genres ? genres : 'No genres'}</Data>
								</tr>
							</tbody>
						</Table>
					</Information>
					<AboutSubtitle>About</AboutSubtitle>
					<Overview>{overview}</Overview>
				</Details>
			</Wrapper>
			<Outlet />
		</>
	);
}

MovieDetails.propTypes = {
	release_date: PropTypes.string,
	overview: PropTypes.string,
	genres: PropTypes.string,
	poster_path: PropTypes.string,
};

import HeroSearch from '@/components/home/HeroSearch';
import HowItWorks from '@/components/home/HowItWorks';
import SearchByLocation from '@/components/home/SearchByLocation';
import BrowseByType from '@/components/home/BrowseByType';
import BrowseByMethodology from '@/components/home/BrowseByMethodology';
import FeaturedSchools from '@/components/home/FeaturedSchools';
import LatestReviews from '@/components/home/LatestReviews';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
    return (
        <>
            <HeroSearch />
            <HowItWorks />
            <SearchByLocation />
            <BrowseByType />
            <BrowseByMethodology />
            <FeaturedSchools />
            <LatestReviews />
            <FinalCTA />
        </>
    );
}

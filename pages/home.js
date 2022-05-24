import HyperLink from '../components/hyperlink';
import MiddlingContainer from '../components/middling-container';
import NavBar from '../components/nav';
import MiddleSection from '../components/middleSection';

export default function Home() {
  return (
    <>
      <NavBar currentPage="User Login System"/>
      <MiddlingContainer>
        <MiddleSection/>
      </MiddlingContainer>

      <MiddlingContainer>
        <HyperLink href="/register" title="Register" />
        <HyperLink href="/login" title="Login" />
      </MiddlingContainer>
    </>
  );
}

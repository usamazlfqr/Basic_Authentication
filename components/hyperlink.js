import Link from 'next/link';

const styles = {

};

export default function HyperLink({ href, title }) {
  return (
    <Link href={href}>
        <a style={{
          textDecoration: 'none',
          backgroundColor: 'blue',
          color:"white",
          fontSize: 20,
          padding:"15px",
          marginRight: "20px",
          borderRadius:"10px"
        }}>
          {title}
        </a>
    </Link>
  );
}

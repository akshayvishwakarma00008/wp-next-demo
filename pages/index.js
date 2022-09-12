const WP_API = process.env.WP_URL;
export default function Home(props) {
  console.log(props);
  const val = props.data.data.posts.nodes[0] || 0;
  
  return (
    <>
    <h1>hello</h1>
    <h1>Date : {val.date && 'no data available'}</h1>
    <h1>Slug : {val.slug && 'no data available'}</h1>
    </>
  )
}

export async function getStaticProps(){
    const res = await fetch(WP_API,{
      method: "POST",
      headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query:`query NewQuery {
              posts {
                nodes {
                  date
                  id
                  slug
                }
              }
            }`
          })
    })
    const data = await res.json();
    console.log(data);
  
    return {
      props:{data}
    }
  
  }
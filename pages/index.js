const WP_API = process.env.WP_URL;
export default function Home(props) {
  console.log(props);
  const val = props.data.data.posts.nodes;
  
  return (
    <>
    {
      val.length >0 ?
          val.map((data)=>{
            return(
              <div key={data.date}>
              <h1>
                date:{data.date}
              </h1>
              <h1>
                Slug:{data.slug}
              </h1>
              <h1>hello</h1>
              </div>


            )
          })
      :<h1>no Posts found</h1>
    }
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
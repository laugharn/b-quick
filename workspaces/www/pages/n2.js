const Page = ({query}) => {
    return <div>This is the querystring: { JSON.stringify(query) }</div>
}

Page.getInitialProps = async context => {
    console.log(context);
    
    return {
        query: context.query
    }
}

export default Page;
const capitalize = async str => str.charAt(0).toUpperCase() + str.slice(1);

const Page = ({name}) => <div>Hello {name}</div>

Page.getInitialProps = async ({query}) => {
    // Let's assume we could make an actual complex API call here
    let name = await capitalize(query.name);

    return {
        name
    }
}

export default Page
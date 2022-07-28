import { useQuery } from "@apollo/client";
import { CreateLink } from "../components/graphql/CreateLink";
import { FEED_QUERY } from "../data/apollo";

const Link = (props: { description: string; url: string }) => {
  return (
    <div>
      {props.description} ({props.url})
    </div>
  );
};

export const GraphQLPage = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  return (
    <>
      {loading ? (
        <span>loading..</span>
      ) : (
        data.feed.links.map((link: any) => <Link key={link.id} {...link} />)
      )}

      <hr />

      <CreateLink />
    </>
  );
};

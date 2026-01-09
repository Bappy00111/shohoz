import Chittagong from "@/components/daynamik-page/Chittagong";
import Dhaka from "@/components/daynamik-page/Dhaka";
import Dinajpur from "@/components/daynamik-page/Dinajpur";
import Rajshahi from "@/components/daynamik-page/Rajshahi";
import Rangpur from "@/components/daynamik-page/Rangpur";
import Sylhet from "@/components/daynamik-page/Sylhet";


export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();

  switch (slug) {
    case "chittagong":
      return <Chittagong />;

    case "dhaka":
      return <Dhaka />;

    case "rajshahi":
      return <Rajshahi />;

    case "rangpur":
      return <Rangpur />;

    case "sylhet":
      return <Sylhet />;

    case "dinajpur":
      return <Dinajpur />;

    default:
      return <h1>Destination Not Found</h1>;
  }
}

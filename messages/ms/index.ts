import about from "./about.json";
import accountManagement from "./accountManagement.json";
import banner from "./banner.json";
import careers from "./careers.json";
import common from "./common.json";
import contact from "./contact.json";
import digitalLicense from "./digitalLicense.json";
import footer from "./footer.json";
import header from "./header.json";
import home from "./home.json";
import insightsChrome from "./insightsChrome.json";
import legalChrome from "./legalChrome.json";
import notFound from "./notFound.json";
import p2p from "./p2p.json";
import softwareDevelopment from "./softwareDevelopment.json";
import trueidentity from "./trueidentity.json";
import truekredit from "./truekredit.json";
import truessm from "./truessm.json";
import truesyariah from "./truesyariah.json";
import workChrome from "./workChrome.json";
import workStudies from "./workStudies.json";

function namespaces(
	...files: object[]
): Record<string, unknown> {
	const out: Record<string, unknown> = {};
	for (const file of files) {
		const { _status: _fileStatus, ...rest } = file as Record<
			string,
			unknown
		>;
		void _fileStatus;
		Object.assign(out, rest);
	}
	return out;
}

const messages = namespaces(
	about,
	accountManagement,
	banner,
	careers,
	common,
	contact,
	digitalLicense,
	footer,
	header,
	home,
	insightsChrome,
	legalChrome,
	notFound,
	p2p,
	softwareDevelopment,
	trueidentity,
	truekredit,
	truessm,
	truesyariah,
	workChrome,
	workStudies,
);

export default messages;

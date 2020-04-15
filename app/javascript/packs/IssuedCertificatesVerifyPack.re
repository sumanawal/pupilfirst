let decodeProps = json =>
  Json.Decode.(
    json |> field("issuedCertificate", IssuedCertificate.decode),
    json |> field("verifyImageUrl", string),
  );

let (issuedCertificate, verifyImageUrl) =
  DomUtils.parseJsonTag() |> decodeProps;

ReactDOMRe.renderToElementWithId(
  <VerifyCertificate__Root issuedCertificate verifyImageUrl />,
  "react-root",
);

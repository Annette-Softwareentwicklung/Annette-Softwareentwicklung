export async function fetchFromHyGraph(query) {
  return await fetch(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljrca9950hg401ujebz5fsjw/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODkyNzA4ODQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xqcmNhOTk1MGhnNDAxdWplYno1ZnNqdy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzk5ZGQ1ZTAtMGU4My00Yjg1LWFiN2EtMjY5YmViZmRjYzNlIiwianRpIjoiY2xrMWc5b2htMDFqNDAxdW02OWg2M3ZnNyJ9.EO3VJj5kJsm-Hrzk8fLTlbxsDmW9wOpl0FSZZr4l4O1kDTRGSbs4Jlr_wTQxdc-p78Zq0UwbcU8TGab5xPEmXRGO1clW8bSx2C3w9kLRKg6lrZphJdG-OxUUjYhn9WguUD8gQ_mIQk2Svkd1eQcK6YJlRvxngA_7_QUimeDBXfjOYmvT6TOkSdQLjHhwAAr980yz4uLLVohzo-pQXe6tWtwwPdVbU7xaFwXLdi9H_UuFiYs8wLihZlQzZIFZ957EAeBTYdtxCLJW7kYAfPE-I6ai57kIe5HlaPH5QGKqW2mNDeoA7es19_4-Vsvj22XY_hj4uAy3UFE-X_oaOPSEl_BLC_KoKADyup8y0v7DsbxGkveaw0FFozAgN4IsmuD9jPKd1OgpvqK1ImXg-eEvrVYQ2uKlanwkn9LSolg25hNyt_vfStBbxYGb2i5WjsEoajJctO7LvfueRTLWLqY6AbNZFawPtYo1xPKOJ48YKkh9k19lTj5TueNdLeIsOVdkeWMADrFFvMWsvV-DLVHIzuFXooopNRfNB9uzeJIka9BGwYgxEfyjcdCw1KDhYkiwhZ2bbAoGaezPhTtAe-JR209ZJGQsujyN_tdix5o-8GDr0fGvCUhxdMItW6sIHi7Mk4cVU_3nyLIDk3gT2kLrdZQvIA1-T80HEYcb78cz4VI`,
      },
      body: JSON.stringify({
        query: query,
      }),
    }
  )
}
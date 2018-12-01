class Company {
  constructor(identifier, title, date, logo, founderImg, founder, description) {
    this.identifier = identifier;
    this.title = title
    this.date = date
    this.logo = logo
    this.founderImg = founderImg
    this.founder = founder
    this.description = description

    this.nextScrollPageIdentifier = this.getNextScrollPageIdentifier()
  }

  getNextScrollPageIdentifier() {
    var goToPage;
    var index;

    if (this.identifier == "pandaExpress") {
      goToPage = "home"
    } else {
      for (index in companyData) {
        var company = companyData[index]
        if (company.identifier == this.identifier) {
          var nextCompany = companyData[(index * 1) + 1]
          goToPage = nextCompany.identifier
        }
      }
    }

    return goToPage;
  }
}

const mongo = require('../../repository/portfolios');

const getAllPortfolios = async (req, res, next) => {
  try {
    const { filter } = req.query;

    const portfolios = await mongo.getAllPortfoliosFromDB(filter);
    res.status(200).json({ data: portfolios });
  } catch (error) {
    res.status(500).json({ error: 'Error getting portfolio/s' });
  }
};

const getPortfolioById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const portfolio = await mongo.getPortfolioByIdFromDB(id);
    res.status(200).json({ data: portfolio });
  } catch (error) {
    res.status(500).json({ error: 'Error getting portfolio by id' });
  }
};

const createPortfolio = async (req, res) => {
  try {
    const { Author, LiveURL, Repo, TechStack } = req.body;
    const imagePath = req.file ? req.file.path : 'none';

    if (!Author || Author.trim() === '') {
      return res.status(400).json({ error: 'Author is required' });
    }

    const newPortfolio = await mongo.createPortfolioInDB({
      Author,
      Screenshot: imagePath ?? 'none',
      LiveURL: LiveURL === '' ? 'none' : LiveURL ?? 'none',
      Repo: Repo === '' ? 'none' : Repo ?? 'none',
      TechStack: Array.isArray(TechStack) ? TechStack : [],
    });

    res.status(201).json({ data: newPortfolio, message: 'Portfolio created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating portfolio' });
  }
};

const updatePortfolioById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { Author, LiveURL, Repo, TechStack } = req.body;
    const imagePath = req.file ? req.file.path : 'none';

    const newPortfolio = await mongo.updatePortfolioByIdInDB(id, {
      Author,
      Screenshot: imagePath ?? 'none',
      LiveURL: LiveURL === '' ? 'none' : LiveURL ?? 'none',
      Repo: Repo === '' ? 'none' : Repo ?? 'none',
      TechStack: Array.isArray(TechStack) ? TechStack : [],
    });

    res.status(201).json({ data: newPortfolio, message: 'Portfolio successfully Updated!' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating portfolio' });
  }
};

const deletePortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;

    await mongo.deletePortfolioFromDB(id);

    res.status(200).json({ data: 'OK', message: 'Portfolio successfully Deleted!' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting portfolio' });
  }
};

module.exports = {
  getAllPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolioById,
  deletePortfolio,
};

// 로그인 체크
module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: '로그인 후 이용해주세요.' })
}
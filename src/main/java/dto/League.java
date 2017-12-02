package dto;

public abstract class League {
	
	private String guest;
	private String gGuest;
	private String master;
	private String gMaster;
	private String result;
	private String league;
	private String date;


	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getGuest() {
		return guest;
	}

	public void setGuest(String guest) {
		this.guest = guest;
	}

	public String getGGuest() {
		return gGuest;
	}

	public void setGGuest(String gGuest) {
		this.gGuest = gGuest;
	}

	public String getMaster() {
		return master;
	}

	public void setMaster(String master) {
		this.master = master;
	}

	public String getGMaster() {
		return gMaster;
	}

	public void setGMaster(String gMaster) {
		this.gMaster = gMaster;
	}

	public String getLeague() {
		return league;
	}

	public void setLeague(String league) {
		this.league = league;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}


}
